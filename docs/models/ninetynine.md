# NinetyNine

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetyNine } from "@vercel/sdk/models/userevent.js";

let value: NinetyNine = {
  gitProvider: "<value>",
  gitProviderGroupDescriptor: "<value>",
  gitScope: "<value>",
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `gitProvider`                | *string*                     | :heavy_check_mark:           | N/A                          |
| `gitProviderGroupDescriptor` | *string*                     | :heavy_check_mark:           | N/A                          |
| `gitScope`                   | *string*                     | :heavy_check_mark:           | N/A                          |