# Seventy

The payload of the event, if requested.

## Example Usage

```typescript
import { Seventy } from "@vercel/sdk/models/oldteam.js";

let value: Seventy = {
  domain: "powerful-farmer.org",
  customNameservers: [],
  prevCustomNameservers: [],
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `domain`                | *string*                | :heavy_check_mark:      | N/A                     |
| `customNameservers`     | *string*[]              | :heavy_check_mark:      | N/A                     |
| `prevCustomNameservers` | *string*[]              | :heavy_check_mark:      | N/A                     |