import * as Sentry from "@sentry/browser";
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
  dsn: "https://e1f35daf20434510a5cd3642c7ef4da2@o1201057.ingest.sentry.io/6557289",
  integrations: [new BrowserTracing()],
  environment: "test",
  release: "test",

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

document.body.innerHTML = `
<div>kjahsdjkfhlkjghsadjkgjlhjkhasjkdfhkahsldkfh</div>
<script src="https://cdn.dp.tech/bohrium/web/static/js/vendors.d06f8b38.chunk.js"></script>
`;

document.addEventListener("click", () => {
  window.hahahaha();
  setTimeout(() => {
    myUndefinedFunction();

    console.log(hahaha.ddddd);
  }, 3000);
});
