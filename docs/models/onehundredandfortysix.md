# OneHundredAndFortySix

The payload of the event, if requested.

## Example Usage

```typescript
import { OneHundredAndFortySix } from "@vercel/sdk/models/payloadactivedashboardviews.js";

let value: OneHundredAndFortySix = {
  projectName: "<value>",
  nextBuildMachineType: "<value>",
  previousBuildMachineSelection: "<value>",
  nextBuildMachineSelection: "<value>",
};
```

## Fields

| Field                           | Type                            | Required                        | Description                     |
| ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `projectId`                     | *string*                        | :heavy_minus_sign:              | N/A                             |
| `projectName`                   | *string*                        | :heavy_check_mark:              | N/A                             |
| `previousBuildMachineType`      | *string*                        | :heavy_minus_sign:              | N/A                             |
| `nextBuildMachineType`          | *string*                        | :heavy_check_mark:              | N/A                             |
| `previousBuildMachineSelection` | *string*                        | :heavy_check_mark:              | N/A                             |
| `nextBuildMachineSelection`     | *string*                        | :heavy_check_mark:              | N/A                             |
| `isSystemInitiated`             | *boolean*                       | :heavy_minus_sign:              | N/A                             |