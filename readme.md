# k6 Overview

![k6 Logo](https://k6.io/images/illustrations/k6-logo.svg)

## Introduction

k6 is an open-source load testing tool designed for modern developers and engineers. It is simple to use, yet powerful, enabling the creation, execution, and analysis of performance tests. With k6, you can easily simulate a large number of virtual users, define complex test scenarios, and collect performance metrics to identify bottlenecks and optimize your applications.

## Key Features

- **Scripting in JavaScript**: Write test scenarios using a JavaScript-based scripting language.
- **Command-Line Interface (CLI)**: Run tests from the command line, integrate with CI/CD pipelines.
- **Built-in Metrics**: Collects detailed metrics on response times, request rates, and more.
- **Extensible**: Supports plugins and extensions to enhance functionality.
- **Local and Cloud Execution**: Run tests locally or in the cloud with k6 Cloud.

## Installation

### Prerequisites

- **Node.js**: Ensure Node.js is installed on your machine.
- **Homebrew (macOS)**: For easy installation on macOS.

### Install k6

#### Using Homebrew (macOS/Linux)

```sh
brew install k6
```

#### Using Docker

```sh
docker pull loadimpact/k6
```

#### Direct Download (Windows/Linux)

Download the latest release from the [official k6 GitHub repository](https://github.com/grafana/k6/releases).

## Getting Started

### Writing a Test Script

Create a JavaScript file (e.g., `test.js`) with the following content:

```js
import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
  stages: [
    { duration: '30s', target: 20 },
    { duration: '1m', target: 10 },
    { duration: '10s', target: 0 },
  ],
};

export default function () {
  let res = http.get('https://test.k6.io');
  check(res, {
    'is status 200': (r) => r.status === 200,
  });
  sleep(1);
}
```

### Running the Test

Run the script using the k6 CLI:

```sh
k6 run test.js
```

### Interpreting Results

After running the test, k6 will provide a summary of the test results, including:

- **HTTP request metrics**: Response time, request count, failure rate.
- **System metrics**: CPU and memory usage.
- **Custom metrics**: Defined within your scripts.

## Advanced Usage

### Load Testing Options

Customize your load tests with various options:

- **Thresholds**: Define performance thresholds to automatically fail tests if they are not met.
- **Tags**: Add tags to requests and metrics for better organization and analysis.
- **Scenarios**: Define complex user behavior and traffic patterns.

### Integration with CI/CD

k6 can be integrated into your CI/CD pipelines for automated performance testing. Use tools like Jenkins, GitLab CI, GitHub Actions, and more.

### k6 Cloud

Leverage the power of the cloud for distributed load testing with [k6 Cloud](https://k6.io/cloud). Seamlessly scale your tests and analyze results with advanced features.

## Community and Support

- **Documentation**: [Official k6 Documentation](https://k6.io/docs/)
- **GitHub**: [k6 GitHub Repository](https://github.com/grafana/k6)
- **Community Forum**: [k6 Community Forum](https://community.k6.io/)
- **Slack Channel**: Join the k6 Slack channel for support and discussions.

## Conclusion

k6 is a versatile and powerful tool for load testing, designed to meet the needs of modern development practices. Its simplicity, combined with robust features, makes it an excellent choice for developers and engineers looking to ensure the performance and reliability of their applications.

---

## Example Report
```
          /\      |‾‾| /‾‾/   /‾‾/
     /\  /  \     |  |/  /   /  /
    /  \/    \    |     (   /   ‾‾\
   /          \   |  |\  \ |  (‾)  |
  / __________ \  |__| \__\ \_____/ .io

     execution: local
        script: tests/dashboard/load-test.js
        output: -

     scenarios: (100.00%) 1 scenario, 100 max VUs, 1m30s max duration (incl. graceful stop):
              * default: Up to 100 looping VUs for 1m0s over 3 stages (gracefulRampDown: 30s, gracefulStop: 30s)


     ✗ is status 200
      ↳  70% — ✓ 2030 / ✗ 849

     checks.........................: 70.51% ✓ 2030      ✗ 849
     data_received..................: 94 MB  1.1 MB/s
     data_sent......................: 502 kB 5.9 kB/s
     http_req_blocked...............: avg=15.64ms  min=100ns   med=200ns    max=3.28s    p(90)=300ns    p(95)=409ns
     http_req_connecting............: avg=8.33ms   min=0s      med=0s       max=3.21s    p(90)=0s       p(95)=0s
   ✗ http_req_duration..............: avg=571.63ms min=24.16ms med=429.67ms max=8.32s    p(90)=1.09s    p(95)=1.34s
       { expected_response:true }...: avg=689.71ms min=70.79ms med=604.49ms max=8.32s    p(90)=1.18s    p(95)=1.47s
   ✗ http_req_failed................: 29.48% ✓ 849       ✗ 2030
     http_req_receiving.............: avg=406.67ms min=31.3µs  med=301.9ms  max=7.24s    p(90)=888.3ms  p(95)=1.08s
     http_req_sending...............: avg=33.03µs  min=10.6µs  med=28.7µs   max=3.27ms   p(90)=46.6µs   p(95)=62.61µs
     http_req_tls_handshaking.......: avg=7.26ms   min=0s      med=0s       max=407.07ms p(90)=0s       p(95)=0s
     http_req_waiting...............: avg=164.92ms min=21.82ms med=97.1ms   max=8.05s    p(90)=340.36ms p(95)=613.69ms
     http_reqs......................: 2879   34.090558/s
     iteration_duration.............: avg=1.58s    min=1.02s   med=1.44s    max=9.33s    p(90)=2.11s    p(95)=2.37s
     iterations.....................: 2879   34.090558/s
     vus............................: 1      min=1       max=100
     vus_max........................: 100    min=100     max=100

```

### Performance Test Report

#### Test Overview

This performance test was executed using k6, a modern load testing tool. The script used for this test is `tests/dashboard/load-test.js`, and it was run locally. The test scenario aimed to simulate up to 100 virtual users (VUs) over a period of 1 minute with a 30-second ramp-up and ramp-down period, including a graceful stop.

#### Test Configuration

- **Maximum VUs**: 100
- **Test Duration**: 1 minute (plus 30s ramp-up and 30s ramp-down)
- **Test Script**: `tests/dashboard/load-test.js`
- **Load Pattern**:
  - Ramp up to 100 VUs over 15 seconds
  - Hold at 100 VUs for 30 seconds
  - Ramp down to 0 VUs over 15 seconds

#### Test Results

- **Total Requests**: 2879
- **Requests per Second**: 34.09
- **Data Received**: 94 MB (1.1 MB/s)
- **Data Sent**: 502 kB (5.9 kB/s)

##### Checks

- **is status 200**:
  - Passed: 2030 (70%)
  - Failed: 849 (30%)

##### HTTP Request Metrics

- **http_req_blocked**:
  - Average: 15.64 ms
  - Median: 200 ns
  - 90th Percentile: 300 ns
  - 95th Percentile: 409 ns
  - Min: 100 ns
  - Max: 3.28 s

- **http_req_connecting**:
  - Average: 8.33 ms
  - Median: 0 s
  - 90th Percentile: 0 s
  - 95th Percentile: 0 s
  - Min: 0 s
  - Max: 3.21 s

- **http_req_duration**:
  - Average: 571.63 ms
  - Median: 429.67 ms
  - 90th Percentile: 1.09 s
  - 95th Percentile: 1.34 s
  - Min: 24.16 ms
  - Max: 8.32 s

- **http_req_failed**:
  - Failed Requests: 29.48%
  - Passed Requests: 70.52%

- **http_req_receiving**:
  - Average: 406.67 ms
  - Median: 301.9 ms
  - 90th Percentile: 888.3 ms
  - 95th Percentile: 1.08 s
  - Min: 31.3 µs
  - Max: 7.24 s

- **http_req_sending**:
  - Average: 33.03 µs
  - Median: 28.7 µs
  - 90th Percentile: 46.6 µs
  - 95th Percentile: 62.61 µs
  - Min: 10.6 µs
  - Max: 3.27 ms

- **http_req_tls_handshaking**:
  - Average: 7.26 ms
  - Median: 0 s
  - 90th Percentile: 0 s
  - 95th Percentile: 0 s
  - Min: 0 s
  - Max: 407.07 ms

- **http_req_waiting**:
  - Average: 164.92 ms
  - Median: 97.1 ms
  - 90th Percentile: 340.36 ms
  - 95th Percentile: 613.69 ms
  - Min: 21.82 ms
  - Max: 8.05 s

- **Iteration Duration**:
  - Average: 1.58 s
  - Median: 1.44 s
  - 90th Percentile: 2.11 s
  - 95th Percentile: 2.37 s
  - Min: 1.02 s
  - Max: 9.33 s

- **Iterations**: 2879 (34.09 iterations/s)

- **Virtual Users**:
  - Minimum: 1
  - Maximum: 100

#### Analysis and Recommendations

**1. Response Status Checks**
- **is status 200**: Only 70% of the requests returned a status code of 200, indicating a significant number of requests (30%) failed. This needs to be investigated further to determine the cause of these failures.

**2. HTTP Request Duration**
- The average request duration was 571.63 ms, with the 95th percentile at 1.34 seconds, which exceeds the desired threshold of 500 ms. This suggests that the system is experiencing performance bottlenecks under load. Potential areas to investigate include:
  - Server-side processing times.
  - Database performance.
  - Network latency.

**3. HTTP Request Failures**
- The failure rate of HTTP requests was 29.48%, significantly higher than the acceptable threshold of 1%. This high failure rate is concerning and requires immediate attention. Possible causes could include:
  - Insufficient server capacity to handle the load.
  - Application-level errors or timeouts.
  - Network issues.

**4. Data Transfer**
- The amount of data received and sent seems reasonable given the number of requests. However, the high request durations and failure rates indicate underlying issues affecting performance.

**5. Recommendations**
- **Optimize Backend Performance**: Investigate and optimize server-side processing, database queries, and application logic to reduce response times.
- **Scale Resources**: Consider scaling the server resources (CPU, memory, etc.) to handle higher loads more efficiently.
- **Improve Error Handling**: Implement better error handling and logging to identify and resolve issues causing request failures.
- **Load Balancing**: Utilize load balancing techniques to distribute the load more evenly across multiple servers.









---

Feel free to customize the content further based on your specific requirements or preferences.