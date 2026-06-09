# ListCheckRunsSource3

## Example Usage

```typescript
import { ListCheckRunsSource3 } from "@vercel/sdk/models/listcheckrunsop.js";

let value: ListCheckRunsSource3 = {
  kind: "git-provider",
  provider: "bitbucket",
  externalCheckName: "<value>",
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `kind`                                                                                                 | [models.ListCheckRunsSourceChecksV2ResponseKind](../models/listcheckrunssourcechecksv2responsekind.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `provider`                                                                                             | [models.ListCheckRunsSourceProvider](../models/listcheckrunssourceprovider.md)                         | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `externalCheckName`                                                                                    | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |