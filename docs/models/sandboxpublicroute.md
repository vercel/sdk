# SandboxPublicRoute

This object represents a public route in a Vercel Sandbox.

## Example Usage

```typescript
import { SandboxPublicRoute } from "@vercel/sdk/models/sandboxpublicroute.js";

let value: SandboxPublicRoute = {
  url: "https://ordinary-heating.name",
  port: 1317.46,
  subdomain: "<value>",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `url`                                                                | *string*                                                             | :heavy_check_mark:                                                   | A public URL to access the corresponding port in the Sandbox.        |
| `port`                                                               | *number*                                                             | :heavy_check_mark:                                                   | The user port number that the route is mapped to.                    |
| `subdomain`                                                          | *string*                                                             | :heavy_check_mark:                                                   | The subdomain assigned to this route.                                |
| `system`                                                             | *boolean*                                                            | :heavy_minus_sign:                                                   | Whether the route is reserved by the system (e.g. for internal use). |