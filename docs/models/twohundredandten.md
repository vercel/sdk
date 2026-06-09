# TwoHundredAndTen

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTen } from "@vercel/sdk/models/usereventpayloadprevious.js";

let value: TwoHundredAndTen = {
  projectId: "<id>",
  projectName: "<value>",
  gitCommitStatus: false,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `projectName`      | *string*           | :heavy_check_mark: | N/A                |
| `gitCommitStatus`  | *boolean*          | :heavy_check_mark: | N/A                |