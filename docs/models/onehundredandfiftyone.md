# OneHundredAndFiftyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFiftyOne } from "@vercel/sdk/models/projectanalytics.js";

let value: OneHundredAndFiftyOne = {
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