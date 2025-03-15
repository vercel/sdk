# OneHundredAndThirtyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndThirtyOne } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndThirtyOne = {
  edgeConfigId: "<id>",
  edgeConfigSlug: "<value>",
  edgeConfigDigest: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `edgeConfigId`     | *string*           | :heavy_check_mark: | N/A                |
| `edgeConfigSlug`   | *string*           | :heavy_check_mark: | N/A                |
| `edgeConfigDigest` | *string*           | :heavy_check_mark: | N/A                |