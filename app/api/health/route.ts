export const dynamic = "force-static"
export function GET() {
  return Response.json({ status: "static", runtime: false })
}
