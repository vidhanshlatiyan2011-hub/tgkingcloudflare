export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Required params
    const action = url.searchParams.get("action");
    const yourId = url.searchParams.get("yourId");

    if (!action || !yourId) {
      return new Response(
        JSON.stringify({ error: "Missing parameters" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // 🔐 ORIGINAL API (hidden here)
    const targetUrl =
      "https://TG-Lion.net" +
      "?action=" + action +
      "&apiKey=is31nza04yh59mx56b" +
      "&YourID=" + yourId;

    const res = await fetch(targetUrl, {
      method: "GET",
      headers: {
        // REAL BROWSER HEADERS
        "User-Agent":
          "Mozilla/5.0 (Linux; Android 14; Pixel 7 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.6167.143 Mobile Safari/537.36",
        "Accept":
          "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
        "Referer": "https://google.com"
      }
    });

    const text = await res.text();

    return new Response(text, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  }
};
