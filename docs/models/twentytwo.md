# TwentyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { TwentyTwo } from "@vercel/sdk/models/oldteam.js";

let value: TwentyTwo = {
  projectName: "<value>",
  autoExposeSystemEnvs: false,
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `projectName`          | *string*               | :heavy_check_mark:     | N/A                    |
| `autoExposeSystemEnvs` | *boolean*              | :heavy_check_mark:     | N/A                    |