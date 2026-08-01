# TwoHundredAndFiftyFour

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndFiftyFour } from "@vercel/sdk/models/envid.js";

let value: TwoHundredAndFiftyFour = {
  projectId: "<id>",
  projectName: "<value>",
  gitLFS: false,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `projectId`        | *string*           | :heavy_check_mark: | N/A                |
| `projectName`      | *string*           | :heavy_check_mark: | N/A                |
| `gitLFS`           | *boolean*          | :heavy_check_mark: | N/A                |