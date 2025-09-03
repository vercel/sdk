# DefaultExpirationSettings

Default deployment expiration settings for this team

## Example Usage

```typescript
import { DefaultExpirationSettings } from "@vercel/sdk/models/team.js";

let value: DefaultExpirationSettings = {};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `expiration`           | *string*               | :heavy_minus_sign:     | N/A                    |
| `expirationProduction` | *string*               | :heavy_minus_sign:     | N/A                    |
| `expirationCanceled`   | *string*               | :heavy_minus_sign:     | N/A                    |
| `expirationErrored`    | *string*               | :heavy_minus_sign:     | N/A                    |