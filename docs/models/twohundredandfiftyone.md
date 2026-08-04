# TwoHundredAndFiftyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFiftyOne } from "@vercel/sdk/models/envid2.js";

let value: TwoHundredAndFiftyOne = {
  projectId: "<id>",
  projectName: "<value>",
  onCommit: false,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `projectName`      | *string*           | :heavy_check_mark: | N/A                |
| `onCommit`         | *boolean*          | :heavy_check_mark: | N/A                |