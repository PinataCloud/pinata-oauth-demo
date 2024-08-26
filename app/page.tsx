"use client";

import Image from "next/image";
import {
  Container,
  Button,
  Stack,
  Typography,
  List,
  ListItem,
  ListItemText,
  Paper,
} from "@mui/material";
import appsScreen from "../public/apps-screen.png";
import createApp from "../public/create-app.png";

export default function Home() {
  const redirectUri = "http://localhost:3000";
  const authLink = `https://app.devpinata.cloud/openid-connect/auth?client_id=${process.env.PINATA_CLIENT_ID}&redirect_uri=${redirectUri}&response_type=code&scope=pinata_user`;
  
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-8">
      <Typography variant="h2">Pinata Oauth2 Demo App</Typography>
      <Container sx={{ display: "flex", gap: 3 }}>
        <Stack component={Paper} sx={{ gap: 4, flex: 1, p: 2 }}>
          <Typography variant="h3">Instructions</Typography>
          <List sx={{ listStyle: "decimal" }}>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText primary="Sign in with Pinata" />
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText primary="Create a Client" />
              <Stack sx={{ gap: 2, pt: 2 }}>
                <Typography>A valid name, logo, and redirect url are required for creating a client.</Typography>
                <Image
                  src={appsScreen}
                  alt="Arrows pointing to the create app button from the Pinata website"
                />
                <Image
                  src={createApp}
                  alt="Create app form on the Pinata website"
                />
              </Stack>
            </ListItem>
            <ListItem sx={{ display: "list-item" }}>
              <ListItemText primary="Item" />
            </ListItem>
          </List>
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
            onClick={() => window.open(authLink, "_blank")}
          >
            Authorize with Pinata
          </Button>
          <Typography>
            After clicking the button, you will be redirected to the Pinata
            OAuth2 page.
          </Typography>
        </Stack>
        <Stack sx={{ gap: 4, flex: 1 }}>
          <Typography>
            No Data Yet! Finish setting up your OAuth flow...
          </Typography>
        </Stack>
      </Container>
    </main>
  );
}
