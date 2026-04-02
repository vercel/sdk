# TwoHundred

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundred } from "@vercel/sdk/models/usereventpayload161next.js";

let value: TwoHundred = {
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