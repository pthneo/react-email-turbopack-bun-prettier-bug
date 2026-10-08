import { Html, Text, render } from "react-email";

export async function GET() {
  const html = await render(
    <Html>
      <Text>Hello</Text>
    </Html>,
  );

  return new Response(html, {
    headers: {
      "Content-Type": "text/html",
    },
  });
}
