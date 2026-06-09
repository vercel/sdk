# OneHundredAndSeventy

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSeventy } from "@vercel/sdk/models/usereventpayloadprevious.js";

let value: OneHundredAndSeventy = {
  projectName: "<value>",
  branch: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `projectId`        | *string*           | :heavy_minus_sign: | N/A                |
| `projectName`      | *string*           | :heavy_check_mark: | N/A                |
| `branch`           | *string*           | :heavy_check_mark: | N/A                |