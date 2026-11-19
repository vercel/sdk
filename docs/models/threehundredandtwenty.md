# ThreeHundredAndTwenty

The payload of the event, if requested.

## Example Usage

```typescript
import { ThreeHundredAndTwenty } from "@vercel/sdk/models/threehundredandfifteen.js";

let value: ThreeHundredAndTwenty = {
  enableFunctionsBeta: true,
  projectId: "<id>",
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `enableFunctionsBeta` | *boolean*             | :heavy_check_mark:    | N/A                   |
| `projectId`           | *string*              | :heavy_check_mark:    | N/A                   |
| `projectName`         | *string*              | :heavy_minus_sign:    | N/A                   |