# OneHundredAndFortyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFortyOne } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndFortyOne = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
  edgeConfigTokenId: "<id>",
  label: "<value>",
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `edgeConfigId`      | *string*            | :heavy_check_mark:  | N/A                 |
| `edgeConfigSlug`    | *string*            | :heavy_check_mark:  | N/A                 |
| `edgeConfigTokenId` | *string*            | :heavy_check_mark:  | N/A                 |
| `label`             | *string*            | :heavy_check_mark:  | N/A                 |