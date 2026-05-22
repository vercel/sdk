# TwoHundred

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundred } from "@vercel/sdk/models/onehundredandfiftysix.js";

let value: TwoHundred = {
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