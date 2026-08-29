# TwoHundredAndSixtySeven

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndSixtySeven } from "@vercel/sdk/models/siftroute.js";

let value: TwoHundredAndSixtySeven = {
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