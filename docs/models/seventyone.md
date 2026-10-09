# SeventyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { SeventyOne } from "@vercel/sdk/models/sixtysix.js";

let value: SeventyOne = {
  autoExposeSystemEnvs: false,
  projectName: "<value>",
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `autoExposeSystemEnvs` | *boolean*              | :heavy_check_mark:     | N/A                    |
| `projectId`            | *string*               | :heavy_minus_sign:     | N/A                    |
| `projectName`          | *string*               | :heavy_check_mark:     | N/A                    |