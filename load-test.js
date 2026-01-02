/**
 * Load Testing Script untuk PaaS App Awan
 * Menggunakan Apache Bench (ab) atau dapat di-run dengan Node.js
 * 
 * Instalasi: npm install autocannon
 * Run: node load-test.js
 */

const autocannon = require("autocannon");

// Konfigurasi URL (sesuaikan dengan URL Anda)
const APP_URL = process.env.APP_URL || "https://paas-app-komputasi-awan.vercel.app";
const API_ENDPOINT = `${APP_URL}/api/hello`;

console.log("🚀 Load Testing Started!");
console.log(`📍 Target URL: ${API_ENDPOINT}`);
console.log("⏳ Testing duration: 60 seconds\n");

// Konfigurasi load test
const options = {
  url: API_ENDPOINT,
  connections: 100, // 100 concurrent connections
  pipelining: 10, // 10 requests per connection
  duration: 60, // 60 detik
  requests: [
    {
      path: "/api/hello",
      method: "GET",
    },
  ],
};

// Run test
const instance = autocannon(options, finishedBench);

// Handle results
function finishedBench(err, res) {
  if (err) {
    console.error("❌ Error:", err);
    process.exit(1);
  }

  console.log("\n✅ Load Test Completed!\n");
  console.log("📊 Results:");
  console.log("─".repeat(50));

  // Parse results
  const results = {
    totalRequests: res.requests.total,
    totalErrors: res.errors,
    errorRate: ((res.errors / res.requests.total) * 100).toFixed(2),
    throughput: res.throughput.total,
    latency: {
      min: res.latency.min,
      max: res.latency.max,
      mean: res.latency.mean.toFixed(2),
      p95: res.latency.p95,
      p99: res.latency.p99,
    },
    duration: `${(res.duration / 1000).toFixed(2)} seconds`,
  };

  // Display results
  console.log(`\n🔢 Request Statistics:`);
  console.log(`  Total Requests: ${results.totalRequests}`);
  console.log(
    `  Requests/sec: ${Math.round(results.totalRequests / 60)}/sec`
  );
  console.log(`  Total Errors: ${results.totalErrors}`);
  console.log(`  Error Rate: ${results.errorRate}%`);

  console.log(`\n⏱️  Latency (Response Time in ms):`);
  console.log(`  Min: ${results.latency.min}ms`);
  console.log(`  Mean: ${results.latency.mean}ms`);
  console.log(`  95th Percentile: ${results.latency.p95}ms`);
  console.log(`  99th Percentile: ${results.latency.p99}ms`);
  console.log(`  Max: ${results.latency.max}ms`);

  console.log(`\n💾 Throughput:`);
  console.log(`  Bytes/sec: ${results.throughput}`);

  console.log(`\n⏰ Total Duration: ${results.duration}`);

  // Verdict
  console.log("\n" + "─".repeat(50));
  if (results.errorRate < 1) {
    console.log("✅ ✅ ✅ LOAD TEST PASSED! ✅ ✅ ✅");
    console.log("System is scalable and handles high load well!");
  } else {
    console.log("⚠️  Warning: Some errors detected");
  }
  console.log("─".repeat(50));
}

// Handle Ctrl+C
process.on("SIGINT", () => {
  console.log("\n\n⏹️  Load test interrupted by user");
  process.exit(0);
});
