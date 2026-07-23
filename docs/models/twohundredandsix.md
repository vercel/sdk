# TwoHundredAndSix

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSix } from "@vercel/sdk/models/preventautoblocking.js";

let value: TwoHundredAndSix = {
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