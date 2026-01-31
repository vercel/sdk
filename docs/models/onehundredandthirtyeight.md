# OneHundredAndThirtyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndThirtyEight } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndThirtyEight = {
  projectId: "<id>",
  projectName: "<value>",
  directoryListing: true,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `projectName`      | *string*           | :heavy_check_mark: | N/A                |
| `directoryListing` | *boolean*          | :heavy_check_mark: | N/A                |