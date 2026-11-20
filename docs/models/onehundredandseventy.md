# OneHundredAndSeventy

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSeventy } from "@vercel/sdk/models/usereventjobpayloaddeployhook.js";

let value: OneHundredAndSeventy = {
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