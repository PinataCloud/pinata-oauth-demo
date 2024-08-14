"use client";

import Image from "next/image";
import { Container, Button, Stack, Typography } from "@mui/material";
import appsScreen from "../public/apps-screen.png";
import createApp from "../public/create-app.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-8">
      <Typography variant="h2">Pinata Oauth2 Demo App</Typography>
      <Container sx={{ display: "flex", gap: 3 }}>
        <Stack sx={{ gap: 4, flex: 1 }}>
          <Typography variant="h3">Instructions</Typography>
          <Typography>
            Create an app on the Pinata dashboard to get your client ID and
            client secret.
          </Typography>
          <Button
            sx={{ p: 2 }}
            variant="contained"
            color="primary"
            onClick={() =>
              window.open(
                "https://app.devpinata.cloud/apps",
                "_blank",
                "noopener,noreferrer"
              )
            }
          >
            Create an App
          </Button>
          <Image src={appsScreen} alt="Arrows pointing to the create app button from the Pinata website"/>
          <Image src={createApp} alt="Create app form on the Pinata website"/>
          <Typography>
            Click the &quot;Authorize with Pinata&quot; button above to start
            the OAuth2 flow. After clicking the button, you will be redirected
            to the Pinata OAuth2 page. Click &quot;Authorize&quot; to grant
            access to your Pinata account.
          </Typography>
          <Button
            sx={{ p: 2 }}
            variant="contained"
            color="primary"
            onClick={() => console.log("clicked")}
          >
            Authorize with Pinata
          </Button>
          <Typography>
            After clicking the button, you will be redirected to the Pinata
            OAuth2 page.
          </Typography>
        </Stack>
        <Stack sx={{ gap: 4, flex: 1 }}>
          <Typography>No Data Yet! Finish setting up your OAuth flow...</Typography>
        </Stack>
      </Container>
    </main>
  );
}
