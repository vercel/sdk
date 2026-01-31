# SeventyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { SeventyFive } from "@vercel/sdk/models/userevent.js";

let value: SeventyFive = {
  integrationId: "<id>",
  integrationSlug: "<value>",
  integrationName: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `integrationId`    | *string*           | :heavy_check_mark: | N/A                |
| `integrationSlug`  | *string*           | :heavy_check_mark: | N/A                |
| `integrationName`  | *string*           | :heavy_check_mark: | N/A                |