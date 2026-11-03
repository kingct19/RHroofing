import { makeRouteHandler } from "@keystatic/next/route-handler";
import config from "../../../../../keystatic.config";

export const dynamic = "force-dynamic";

type KeystaticRoute = ReturnType<typeof makeRouteHandler>;

let routeHandler: KeystaticRoute | undefined;

function getHandler(): KeystaticRoute {
  if (!routeHandler) {
    routeHandler = makeRouteHandler({ config });
  }
  return routeHandler;
}

function setupRequired(): Response {
  return new Response(
    "Keystatic needs its GitHub app environment variables before the live editor can save. Run the editor locally, create the GitHub app, then add KEYSTATIC_GITHUB_CLIENT_ID, KEYSTATIC_GITHUB_CLIENT_SECRET, KEYSTATIC_SECRET, and NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG to the host.",
    { status: 503, headers: { "content-type": "text/plain; charset=utf-8" } },
  );
}

export async function GET(request: Request) {
  try {
    return await getHandler().GET(request);
  } catch (error) {
    if (routeHandler) throw error;
    return setupRequired();
  }
}

export async function POST(request: Request) {
  try {
    return await getHandler().POST(request);
  } catch (error) {
    if (routeHandler) throw error;
    return setupRequired();
  }
}
