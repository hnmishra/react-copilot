const request = require('supertest');
const express = require('express');
const PatientDAO = require('../DAO/patientDAO');
const patientRoutes = require('../Routes/patientRoutes');

jest.mock('../DAO/patientDAO');

const app = express();
app.use(express.json());
app.use('/patient', patientRoutes);

describe('Patient Controller', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('GET /patient', async () => {
    const mockPatients = [{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }];
    PatientDAO.getAll.mockResolvedValue(mockPatients);

    const response = await request(app).get('/patient');

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(mockPatients);
  });

  test('GET /patient/:id', async () => {
    const mockPatient = { id: "1", name: 'John Doe' };
    PatientDAO.getById.mockResolvedValue(mockPatient);

    const response = await request(app).get('/patient/1');

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(mockPatient);
  });

  test('POST /patient', async () => {
    const newPatient = { name: 'John Doe' };
    PatientDAO.create.mockResolvedValue({ id: 1, ...newPatient });

    const response = await request(app).post('/patient').send(newPatient);

    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual({ id: 1, ...newPatient });
  });

  test('PUT /patient/:id', async () => {
    const updatedPatient = { name: 'John Doe Updated' };
    PatientDAO.update.mockResolvedValue({ id: 1, ...updatedPatient });

    const response = await request(app).put('/patient/1').send(updatedPatient);

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ id: 1, ...updatedPatient });
  });

  test('DELETE /patient/:id', async () => {
    PatientDAO.delete.mockResolvedValue(true);

    const response = await request(app).delete('/patient/1');

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: 'Patient deleted' });
  });
});