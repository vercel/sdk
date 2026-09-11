# TwoHundredAndThree

The payload of the event, if requested.

## Example Usage

```typescript
import { TwoHundredAndThree } from "@vercel/sdk/models/artifacts.js";

let value: TwoHundredAndThree = {
  directoryGroupId: "<id>",
  directoryId: "<id>",
  organizationId: "<id>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `directoryGroupId` | *string*           | :heavy_check_mark: | N/A                |
| `directoryId`      | *string*           | :heavy_check_mark: | N/A                |
| `organizationId`   | *string*           | :heavy_check_mark: | N/A                |