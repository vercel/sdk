# OneHundredAndSixtySix

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndSixtySix } from "@vercel/sdk/models/payloadbranchmatcher.js";

let value: OneHundredAndSixtySix = {
  projectId: "<id>",
  projectName: "<value>",
  onCommit: true,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `projectName`      | *string*           | :heavy_check_mark: | N/A                |
| `onCommit`         | *boolean*          | :heavy_check_mark: | N/A                |