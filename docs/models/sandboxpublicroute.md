# SandboxPublicRoute

This object represents a public route in a Vercel Sandbox.

## Example Usage

```typescript
import { SandboxPublicRoute } from "@vercel/sdk/models/sandboxpublicroute.js";

let value: SandboxPublicRoute = {
  port: 6758,
  subdomain: "<value>",
  url: "https://inferior-lobster.com",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `port`                                                               | *number*                                                             | :heavy_check_mark:                                                   | The user port number that the route is mapped to.                    |
| `subdomain`                                                          | *string*                                                             | :heavy_check_mark:                                                   | The subdomain assigned to this route.                                |
| `system`                                                             | *true*                                                               | :heavy_minus_sign:                                                   | Whether the route is reserved by the system (e.g. for internal use). |
| `url`                                                                | *string*                                                             | :heavy_check_mark:                                                   | A public URL to access the corresponding port in the Sandbox.        |