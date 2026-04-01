# UpdateMicrofrontendsOidcTokenConfig

## Example Usage

```typescript
import { UpdateMicrofrontendsOidcTokenConfig } from "@vercel/sdk/models/updatemicrofrontendsop.js";

let value: UpdateMicrofrontendsOidcTokenConfig = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `enabled`                                                                            | *boolean*                                                                            | :heavy_minus_sign:                                                                   | Whether or not to generate OpenID Connect JSON Web Tokens.                           |
| `issuerMode`                                                                         | [models.UpdateMicrofrontendsIssuerMode](../models/updatemicrofrontendsissuermode.md) | :heavy_minus_sign:                                                                   | - team: `https://oidc.vercel.com/[team_slug]` - global: `https://oidc.vercel.com`    |