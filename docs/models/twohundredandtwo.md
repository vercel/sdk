# TwoHundredAndTwo

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwo } from "@vercel/sdk/models/onehundredandfiftyfive.js";

let value: TwoHundredAndTwo = {
  projectId: "<id>",
  projectName: "<value>",
  gitLFS: true,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `projectName`      | *string*           | :heavy_check_mark: | N/A                |
| `gitLFS`           | *boolean*          | :heavy_check_mark: | N/A                |