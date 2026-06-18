# TwoHundredAndTwenty

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndTwenty } from "@vercel/sdk/models/usereventpayloaddeploymenttype.js";

let value: TwoHundredAndTwenty = {
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