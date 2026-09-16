# CompleteRollingReleaseResponseBody

The response format for rolling release endpoints that return rolling release information

## Example Usage

```typescript
import { CompleteRollingReleaseResponseBody } from "@vercel/sdk/models/completerollingreleaseop.js";

let value: CompleteRollingReleaseResponseBody = {
  rollingRelease: {
    activeStage: {
      duration: null,
      index: 1,
      isFinalStage: false,
      requireApproval: true,
      targetPercentage: 25,
    },
    advancementType: "manual-approval",
    canaryDeployment: {
      createdAt: 1716210100000,
      id: "dpl_def456",
      name: "my-shop@9c7e2f4",
      readyState: "READY",
      readyStateAt: 1716210400000,
      source: "git",
      target: "production",
      url: "9c7e2f4-my-shop.vercel.app",
    },
    currentDeployment: {
      createdAt: 1716206500000,
      id: "dpl_abc123",
      name: "my-shop@main",
      readyState: "READY",
      readyStateAt: 1716206800000,
      source: "git",
      target: "production",
      url: "my-shop.vercel.app",
    },
    nextStage: {
      duration: null,
      index: 2,
      isFinalStage: false,
      requireApproval: true,
      targetPercentage: 60,
    },
    queuedDeploymentId: "dpl_ghi789",
    stages: [
      {
        duration: null,
        index: 0,
        isFinalStage: false,
        requireApproval: true,
        targetPercentage: 5,
      },
      {
        duration: null,
        index: 1,
        isFinalStage: false,
        requireApproval: true,
        targetPercentage: 25,
      },
      {
        duration: null,
        index: 2,
        isFinalStage: false,
        requireApproval: true,
        targetPercentage: 60,
      },
      {
        duration: null,
        index: 3,
        isFinalStage: true,
        requireApproval: false,
        targetPercentage: 100,
      },
    ],
    startedAt: 1716210500000,
    state: "ACTIVE",
    substate: "PAUSED",
    updatedAt: 1716210600000,
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `rollingRelease`                                                                                               | [models.CompleteRollingReleaseRollingRelease](../models/completerollingreleaserollingrelease.md)               | :heavy_check_mark:                                                                                             | Rolling release information including configuration and document details, or null if no rolling release exists |