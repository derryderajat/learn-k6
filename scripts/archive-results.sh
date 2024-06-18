#!/bin/bash
# Script to archive old test results
timestamp=$(date +%Y%m%d_%H%M%S)
mkdir -p archive/$timestamp
mv results/reports/* archive/$timestamp/
mv results/logs/* archive/$timestamp/
echo "Results archived to archive/$timestamp"
