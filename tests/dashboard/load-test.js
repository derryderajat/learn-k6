import http from "k6/http";
import { check, sleep } from "k6";

// Load options from a JSON file
const options = JSON.parse(open("../../config/dashboard/options.json"));

export { options };

export default function () {
  let res = http.get(
    "https://www.blibli.com/backend/content-api/pages/home2023/sections/main_section/blocks/NEW_USER_ZONE/vouchers?display=normal&page=1&item_per_page=200"
  );
  check(res, {
    "is status 200": (r) => r.status === 200,
  });

  sleep(1);
}
