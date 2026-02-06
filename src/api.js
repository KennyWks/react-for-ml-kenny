export async function requestPrediction(url, features) {
  const res = await fetch("https://backend-for-ml-kenny.vercel.app" + url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ features }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Server responded ${res.status}: ${text}`);
  }
  const json = await res.json();
  // Basic validation - handle both array and object responses
  if (
    json == null ||
    (typeof json.probability !== "number" && !Array.isArray(json))
  ) {
    throw new Error("Invalid response from prediction API");
  }
  return json;
}

export default { requestPrediction };
