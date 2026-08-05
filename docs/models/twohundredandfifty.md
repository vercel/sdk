# TwoHundredAndFifty

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFifty } from "@vercel/sdk/models/envid2.js";

let value: TwoHundredAndFifty = {
  projectId: "<id>",
  projectName: "<value>",
  onPullRequest: false,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `projectName`      | *string*           | :heavy_check_mark: | N/A                |
| `onPullRequest`    | *boolean*          | :heavy_check_mark: | N/A                |