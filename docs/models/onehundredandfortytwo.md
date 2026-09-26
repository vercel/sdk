# OneHundredAndFortyTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFortyTwo } from "@vercel/sdk/models/usereventjobpayloadprovider.js";

let value: OneHundredAndFortyTwo = {
  projectId: "<id>",
  projectName: "<value>",
  srcImages: [
    "<value 1>",
  ],
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `projectName`      | *string*           | :heavy_check_mark: | N/A                |
| `srcImages`        | *string*[]         | :heavy_check_mark: | N/A                |