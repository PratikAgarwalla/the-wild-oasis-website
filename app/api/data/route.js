export async function GET() {
  return new Response(JSON.stringify({ name: "TEST" }), {
    headers: { "Content-Type": "application/json" },
  });
}
