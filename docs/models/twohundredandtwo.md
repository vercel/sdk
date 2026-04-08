# TwoHundredAndTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwo } from "@vercel/sdk/models/usereventpayload162previous.js";

let value: TwoHundredAndTwo = {
  projectId: "<id>",
  projectName: "<value>",
  publicSource: true,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `projectName`      | *string*           | :heavy_check_mark: | N/A                |
| `publicSource`     | *boolean*          | :heavy_check_mark: | N/A                |