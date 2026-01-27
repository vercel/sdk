# OneHundredAndThirtyFive

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndThirtyFive } from "@vercel/sdk/models/userevent.js";

let value: OneHundredAndThirtyFive = {
  projectId: "<id>",
  projectName: "<value>",
  directoryListing: false,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `projectName`      | *string*           | :heavy_check_mark: | N/A                |
| `directoryListing` | *boolean*          | :heavy_check_mark: | N/A                |