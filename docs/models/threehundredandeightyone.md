# ThreeHundredAndEightyOne

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndEightyOne } from "@vercel/sdk/models/consent.js";

let value: ThreeHundredAndEightyOne = {
  newName: "<value>",
  oldName: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `newName`          | *string*           | :heavy_check_mark: | N/A                |
| `oldName`          | *string*           | :heavy_check_mark: | N/A                |
| `uid`              | *string*           | :heavy_minus_sign: | N/A                |