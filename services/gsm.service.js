const db = require("../config/db");

const getAll = async () => {
  return await db.HewaTell.findAll();
};

const findGsmDataById = async (id) => {
  return await db.HewaTell.findByPk(id);
};

const createGsmData = async ({ DeviceCode, CO, DUST, ETHYL, NO2, VOC }) => {
  const newGsmData = await db.HewaTell.create({ DeviceCode, CO, DUST, ETHYL, NO2, VOC });
  return newGsmData;
};

const updateGsmData = async ({ Id, DeviceCode, CO, DUST, ETHYL, NO2, VOC }) => {
  try {
    const [updatedCount] = await db.HewaTell.update(
      { Id, DeviceCode, CO, DUST, ETHYL, NO2, VOC },
      {
        where: { Id: Id }
      }
    );

    if (updatedCount === 0) {
      throw new Error("No records were updated. Record with provided Id not found.");
    }

    return { Id, DeviceCode, CO, DUST, ETHYL, NO2, VOC };
  } catch (error) {
    throw new Error("Error occurred while updating data: " + error.message);
  }
};


const deleteGsmData = async (Id) => {
  await db.HewaTell.destroy({
    where: { Id: Id },
  });
};

module.exports = {
  getAll,
  findGsmDataById,
  createGsmData,
  updateGsmData,
  deleteGsmData,
};
