export async function GET() {
  return new Response(JSON.stringify({ name: "Pratik" }), {
    headers: { "Content-Type": "application/json" },
  });
}
