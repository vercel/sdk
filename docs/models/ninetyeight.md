# NinetyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { NinetyEight } from "@vercel/sdk/models/userevent.js";

let value: NinetyEight = {
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