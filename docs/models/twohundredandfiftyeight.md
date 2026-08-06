# TwoHundredAndFiftyEight

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFiftyEight } from "@vercel/sdk/models/twohundredandforty.js";

let value: TwoHundredAndFiftyEight = {
  projectId: "<id>",
  projectName: "<value>",
  gitCommitStatus: true,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `projectName`      | *string*           | :heavy_check_mark: | N/A                |
| `gitCommitStatus`  | *boolean*          | :heavy_check_mark: | N/A                |